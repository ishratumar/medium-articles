import { AiFillLinkedin, AiFillMediumCircle, AiOutlineTwitter } from "react-icons/ai";

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function handler(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@ishratumar"

const homeSeo = {
  title: "Ishrat",
  desc: "This website created for medium community to showcase medium articles"
}

const aboutSeo = {
  title: "About",
  desc: "About author"
}

const contactSeo = {
  title: "Contact",
  desc: "Contact with the author"
}

const myImg= "https://img.freepik.com/free-vector/cute-woman-working-laptop-with-fire-cartoon-vector-icon-illustration-people-technology-isolated_138676-6250.jpg?w=300"

const navLogo = "Ishrat"

const navInfo = [

  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: 'https://medium.com/@ishratumar', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

const navSocialIcons = [
  { href: 'https://medium.com/@ishratumar', icon: <AiFillMediumCircle size={25} /> },
  { href: 'https://twitter.com/ishratUmar18', icon: <AiOutlineTwitter size={25} /> },
  { href: 'https://www.linkedin.com/in/ishratumar/', icon: <AiFillLinkedin size={25} /> },
];

const phoneNavInfo = "Web Developer | Technical Writer" 

const socialprofils = {
  medium: "https://medium.com/@ishratumar",
  twitter: "https://twitter.com/ishratUmar18",
  linkedin: "https://www.linkedin.com/in/ishratumar/",
};

const header = {
  info: 'I’m Ishrat Umar',
  info_two: 'Graduate in MS Computer Science and a Web Developer based in Pakistan with diverse skills across many Web development technologies. As a web developer, I am passionate about what I do.Also, love to write and share my knowledge with others. Currently creating content on Twitter, Medium and Dev.to. I strive to be helpful, efficient, and productive as a web developer.'
}




export {
  mediumURL,
  homeSeo,
  aboutSeo,
  contactSeo,
  myImg,
  navLogo,
  navInfo,
  navSocialIcons,
  phoneNavInfo,
  socialprofils,
  header
};
