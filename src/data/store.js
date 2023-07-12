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
