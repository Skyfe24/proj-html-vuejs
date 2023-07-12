import { reactive } from "vue";

export const store = reactive({
  headerNavs: ["Home", "Pages", "Courses", "Features", "Blog", "Shop"],
  headerLogo: "./src/assets/img/dark-logo.png",
  dropdowncontents: [
    "Start here",
    "Success story",
    "About me",
    "About us 01",
    "About us 02",
    "About us 03",
    "Contact me",
    "Contact us",
    "Purchase guide",
    "Privicy policy",
    "Terms of service",
  ],
  course1: {
    price: "$40,00",
    subject: "Learning to Write as a Professional Author",
    lessons: "20 lessons",
    students: "50 students",
  },
  course2: {
    price: "$0,00",
    subject: "Customer-centrice Info-Tech Strategies",
    lessons: "24 lessons",
    students: "769 students",
  },
  course3: {
    price: "$19,00",
    subject: "Open Programming Courses for Everyone: Python",
    lessons: "17 lessons",
    students: "62 students",
  },

  footerInfos: {
    title: "Address",
    street: "382 NE  191st St # 87934 Miami, FL 33179-3899",
    number: "+1(305)547-9909 (9am - 5pm EST, Monday-Friday)",
    email: "support@maxcoach.com",

    exploreSection: "Explore",
    explore: [
      "Start Here",
      "Blog",
      "About Us",
      "Success story",
      "Courses",
      "Contact Us",
    ],

    informationSection: "Information",
    information: [
      "Membership",
      "Purchase Guide",
      "Privacy Policy",
      "Term of Service",
    ],
  },
});
