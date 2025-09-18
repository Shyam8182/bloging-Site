import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import servises from "../appwrite/config";
import CButone from "../components/CButone";
import Container from "../components/container/Container";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            servises.getPost(slug).then((post) => {
                if (post){ 
                    setPost(post)
                    // console.log("from post ",post);
                    // console.log("from post with image ",post.feturedimage);

                }
                else{ navigate("/");}
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        servises.deletePost(post.$id).then((status) => {
            if (status) {
                servises.deleteFile(post.feturedimage);
                navigate("/");
            }
        });
    };
    
    

    return post ? (
        <div className="py-8 bg-white text-black px-8">
            <Container>
                <div className="w-full flex justify-center mb-4relative border rounded-xl p-2 my-4 mt-8 mb-8">
                    <img
                        src={servises.getFilePriweu(post.feturedimage)}
                        alt="image not showing for financial issues"
                        className="rounded-xl"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            <Link to={`/edit-post/${post.$id}`}>
                                <CButone bgColor="bg-green-500" className="mr-3">
                                    Edit
                                </CButone>
                            </Link>
                            <CButone bgColor="bg-red-500" onClick={deletePost}>
                                Delete
                            </CButone>
                        </div>
                    )}
                </div>
                <div className="w-full mb-6">
                    <h1 className="text-2xl  font-bold">{post.tital}</h1>
                </div>
                <div className="browser-css">
                    {parse(post.content)}
                    </div>
            </Container>
        </div>
    ) : null;
}