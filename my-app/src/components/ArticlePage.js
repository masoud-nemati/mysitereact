import React from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./Article";

import img1 from "../images/img1.jpg"
import img2 from "../images/img2.jpg"
import img3 from "../images/img2.jpg"

const articles = [
    {
        title: "مقاله‌ای در مورد رستگاری",
        date: "24 بهمن 1403",
        author: "مسعود نعمتی",
        content: "متن مقاله در مورد رستگاری...",
        image: img1
    },
    {
        title: "مقاله‌ای در مورد نجات",
        date: "25 بهمن 1403",
        author: "مسعود نعمتی",
        content: "متن مقاله در مورد نجات...",
        image: img2
    },
    {
        title: "مقاله‌ای در مورد ایمان",
        date: "26 بهمن 1403",
        author: "مسعود نعمتی",
        content: "متن مقاله در مورد ایمان...",
        image: img3
    },
    {
        title: "مقاله‌ای در مورد ایمان",
        date: "26 بهمن 1403",
        author: "مسعود نعمتی",
        content: "متن مقاله در مورد ایمان...",
        image: img3
    },
    {
        title: "مقاله‌ای در مورد ایمان",
        date: "26 بهمن 1403",
        author: "مسعود نعمتی",
        content: "متن مقاله در مورد ایمان...",
        image: img3
    },
    {
        title: "مقاله‌ای در مورد ایمان",
        date: "26 بهمن 1403",
        author: "مسعود نعمتی",
        content: "متن مقاله در مورد ایمان...",
        image: img3
    },
];

const ArticlePage = () => {
    return (
        <div className="article-page">
            {articles.map((article, index) => (
                <Link key={index} to={`/ArticlePage/${index}`} className="article-link">
                    <ArticleCard
                        title={article.title}
                        date={article.date}
                        author={article.author}
                        image={article.image}
                    />
                </Link>
            ))}
        </div>
    );
};

export default ArticlePage;
