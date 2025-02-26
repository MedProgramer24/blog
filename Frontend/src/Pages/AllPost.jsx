import React, { useEffect, useState } from 'react';
import { FaTrashAlt, FaEdit } from 'react-icons/fa';
import { BaseUrl, delet as deletePost, get, patch, put } from '../services/Endpoint';
import toast from 'react-hot-toast';

export default function AllPost() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [updatedPost, setUpdatedPost] = useState({ title: '', desc: '', image: null });
  const [previewImage, setPreviewImage] = useState(null);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await get("/blog/GetPosts");
        setPosts(response.data.posts);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false);
      }
    };
    getPosts();
  }, []);

  // Handle Delete
  const handleDelete = async (postId) => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        const response = await deletePost(`/blog/delete/${postId}`);
        if (response.data.success) {
          toast.success(response.data.message);
          setPosts(posts.filter((post) => post._id !== postId));
        } else {
          toast.error('Failed to delete the post.');
        }
      } catch (error) {
        console.error('Error deleting post:', error);
        toast.error("An unexpected error occurred.");
      }
    }
  };

  // Handle Open Update Modal
  const handleUpdate = (post) => {
    setSelectedPost(post);
    setUpdatedPost({ title: post.title, desc: post.desc, image: null });
    setPreviewImage(`${BaseUrl}/images/${post.image}`);
    setShowModal(true);
  };

  // Handle Input Change
  const handleChange = (e) => {
    setUpdatedPost({ ...updatedPost, [e.target.name]: e.target.value });
  };

  // Handle Image Change
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setUpdatedPost({ ...updatedPost, image: file });
    setPreviewImage(URL.createObjectURL(file));
  };

  // Handle Submit Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', updatedPost.title);
    formData.append('desc', updatedPost.desc);
    if (updatedPost.image) {
      formData.append('postimg', updatedPost.image);
    }

    try {
      const response = await patch(`/blog/update/${selectedPost._id}`, formData);
      if (response.data.success) {
        toast.success("Post updated successfully!");
        setShowModal(false);


        // Update state with new post data
        setPosts(posts.map((post) => (post._id === selectedPost._id ? { ...post, ...updatedPost } : post)));
      } else {
        toast.error("Failed to update post.");
      }
    } catch (error) {
      console.error('Error updating post:', error);
      toast.error("Error updating post. Please try again.");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4 text-white">All Posts</h1>

      {loading ? (
        <p className="text-center text-white">Loading posts...</p>
      ) : (
        <div className="row">
          {posts.map((post) => (
            <div className="col-md-4 mb-4" key={post._id}>
              <div className="card h-100 bg-dark text-white" style={{ border: "1px solid white" ,height:"100%"}}>
                <img src={`${BaseUrl}/images/${post.image}`} className="card-img-top" alt={post.title} style={{height:"256px"}}/>
                <div className="card-body">
                  <h5 className="card-title">{post.title}</h5>
                  <p className="card-text" style={{overflow:"hidden",height:"100px"}}>{post.desc}</p>
                </div>
                <div className="card-footer d-flex justify-content-between">
                  <button className="btn btn-danger" onClick={() => handleDelete(post._id)}>
                    <FaTrashAlt /> Delete
                  </button>
                  <button className="btn btn-warning" onClick={() => handleUpdate(post)}>
                    <FaEdit /> Update
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Update Post Modal */}
      {showModal && (
        <div className="modal d-block bg-opacity-75" style={{height:"100%",backgroundColor:"rgba(0,0,0,0.5)"}}>
          <div className="modal-dialog">
            <div className="modal-content bg-dark text-white p-4" style={{alignItems:"center"}}>
              <h2 className="text-center">Update Post</h2>
              <form onSubmit={handleSubmit} style={{ gap: '0px' , marginTop:"0"}}>
                <div className="mb-3">
                  <label className="form-label">Title</label>
                  <input
                    type="text"
                    name="title"
                    value={updatedPost.title}
                    onChange={handleChange}
                    className="form-control"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Description</label>
                  <textarea
                    name="desc"
                    value={updatedPost.desc}
                    onChange={handleChange}
                    className="form-control"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label className="form-label">Image</label>
                  <input
                    type="file"
                    name="image"
                    className="form-control"
                    onChange={handleImageChange}
                  />
                  {previewImage && (
                    <div className="mt-2">
                      <img src={previewImage} alt="Preview" style={{ width: '100px', borderRadius: '5px' }} />
                    </div>
                  )}
                </div>

                <div className="d-flex justify-content-between">
                  <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                    Cancel
                  </button>
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Update Post</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
