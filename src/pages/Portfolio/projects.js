import tech_blog from './images/tech_blog.png';
import social_network_api from './images/social_network_api.png';
import e_commerce_back_end from './images/e_commerce_back_end.png';

export const projects = [
    {
        "reponame": "social-network-api",
        "image": social_network_api,
        "hostimage": "https://avatars.githubusercontent.com/u/42851277?v=4",
        "hostname": "angel-pup",
        "date": "23 Feb 2023",
        "description": "A simple social media RESTful API project implemented with a MongoDB Database hosted via Atlas, with Express routing hosted on Heroku."
    },
    {
        "reponame": "tech-blog",
        "image": tech_blog,
        "hostimage": "https://avatars.githubusercontent.com/u/42851277?v=4",
        "hostname": "angel-pup",
        "date": "18 Feb 2023",
        "description": "Simple tech blog utilizing handlebars for the express view engine w/ middleware functions and express session utilized, along with a mysql sequelize ORM, in a MVC package."
    },
    {
        "reponame": "e-commerce-back-end",
        "image": e_commerce_back_end,
        "hostimage": "https://avatars.githubusercontent.com/u/42851277?v=4",
        "hostname": "angel-pup",
        "date": "10 Feb 2023",
        "description": "Simple demonstration of RESTful API hosted on Heroku to grab information (integrated via JAWSDB) for a MySQL database."
    }
]