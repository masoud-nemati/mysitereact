import React from "react";
import { Link } from "react-router-dom";
import ArticleCard from "./Article";

import img1 from "../images/imgh.jpg"
import img2 from "../images/img14.jpg"
import img3 from "../images/imgaa.jpg"
import img4 from "../images/images55.webp"
import img5 from "../images/imgd.jpg"
const articles = [
    {
        title: "تاثیرات نقاط قوت و ضعف خانواده ها",
        date: "2023",
        author: "مسعود نعمتی",
        content: "متن مقاله در مورد رستگاری...",
        image: img1
    },
    {
        title: " امید در میان رنج ها و جفاها",
        date: "2024",
        author: "مسعود نعمتی",
        content: "متن مقاله در مورد نجات...",
        image: img2
    },
    {
        title: " نقش انبیا در اصلاح پادشاهان و مردم ",
        date: "2022",
        author: "مسعود نعمتی",
        content: "متن مقاله در مورد ایمان...",
        image: img3
    },
    {
        title: "آموزهای پولس در مورد نجات",
        date: "2024",
        author: "مسعود نعمتی",
        content: "متن مقاله در مورد ایمان...",
        image: img5
    },
    {
        title: "حریم ها و مرزها",
        date: "2025",
        author: "مسعود نعمتی",
        content: "متن مقاله در مورد ایمان...",
        image: img4
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
