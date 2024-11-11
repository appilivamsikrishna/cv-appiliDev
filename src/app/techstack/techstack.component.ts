import { Component, OnInit } from '@angular/core';


interface Icon {
  title: string;
  href: string;
  src: string;
  alt: string;
}


@Component({
  selector: "app-techstack",
  templateUrl: "./techstack.component.html",
  styleUrls: ["./techstack.component.css"],
})
export class TechstackComponent implements OnInit {
  icons: Icon[] = [
    {
      title: "AWS",
      href: "https://aws.amazon.com/",
      src: "../../assets/img/home/aws.svg",
      alt: "AWS",
    },
    {
      title: "Microsoft Azure",
      href: "https://azure.microsoft.com/",
      src: "../../assets/img/home/azure.svg",
      alt: "Microsoft Azure",
    },
    {
      title: "Google Cloud Platform",
      href: "https://cloud.google.com/",
      src: "../../assets/img/home/gcp.svg",
      alt: "Google Cloud Platform",
    },
    {
      title: "DigitalOcean",
      href: "https://digitalocean.com/",
      src: "../../assets/img/home/digitalocean.svg",
      alt: "DigitalOcean",
    },
    {
      title: "Firebase",
      href: "https://firebase.google.com/",
      src: "../../assets/img/home/firebase.svg",
      alt: "Firebase",
    },
    {
      title: "ReactJS",
      href: "https://reactjs.org/",
      src: "../../assets/img/home/react.svg",
      alt: "React",
    },
    {
      title: "Angular",
      href: "https://angular.io/",
      src: "../../assets/img/home/angular.svg",
      alt: "Angular",
    },
    {
      title: "HTML",
      href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      src: "../../assets/img/home/html5.svg",
      alt: "HTML",
    },
    {
      title: "CSS",
      href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      src: "../../assets/img/home/css.svg",
      alt: "CSS",
    },
    {
      title: "JavaScript",
      href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      src: "../../assets/img/home/javascript.svg",
      alt: "JavaScript",
    },
    {
      title: "TypeScript",
      href: "https://www.typescriptlang.org/",
      src: "../../assets/img/home/ts.svg",
      alt: "TypeScript",
    },
    {
      title: "NodeJS",
      href: "https://nodejs.org/",
      src: "../../assets/img/home/node.svg",
      alt: "NodeJS",
    },
    {
      title: "Express",
      href: "https://expressjs.com/",
      src: "../../assets/img/home/Express.svg",
      alt: "Express",
    },
    {
      title: "MongoDB",
      href: "https://www.mongodb.com/",
      src: "../../assets/img/home/mongo.svg",
      alt: "MongoDB",
    },
    {
      title: "Sequelize",
      href: "https://sequelize.org/",
      src: "../../assets/img/home/sequalise.svg",
      alt: "Sequelize",
    },
    {
      title: "OutSystems",
      href: "https://www.outsystems.com/",
      src: "../../assets/img/home/outsystem.svg",
      alt: "OutSystems",
    },
    {
      title: "Mendix",
      href: "https://www.mendix.com/",
      src: "../../assets/img/home/mendix.svg",
      alt: "Mendix",
    },
    {
      title: "Appian",
      href: "https://appian.com/",
      src: "../../assets/img/home/appian.svg",
      alt: "Appian",
    },
    {
      title: "Figma",
      href: "https://www.figma.com/",
      src: "../../assets/img/home/figma.svg",
      alt: "Figma",
    },
    {
      title: "Blender",
      href: "https://www.blender.org/",
      src: "../../assets/img/home/blender.svg",
      alt: "Blender",
    },
    {
      title: "Jest",
      href: "https://jestjs.io/",
      src: "../../assets/img/home/jest.svg",
      alt: "Jest",
    },
    {
      title: "Jenkins",
      href: "https://www.jenkins.io/",
      src: "../../assets/img/home/jenkins.svg",
      alt: "Jenkins",
    },
    {
      title: "Swagger",
      href: "https://swagger.io/",
      src: "../../assets/img/home/swagger.svg",
      alt: "Swagger",
    },
    {
      title: "Cloudflare",
      href: "https://cloudflare.com/",
      src: "../../assets/img/home/cloudflare.svg",
      alt: "Cloudflare",
    },
    {
      title: "Docker",
      href: "https://docker.com/",
      src: "../../assets/img/home/docker.svg",
      alt: "Docker",
    },
    {
      title: "Google Play Store",
      href: "https://play.google.com/store",
      src: "../../assets/img/home/playstore.svg",
      alt: "Google Play Store",
    },
    {
      title: "Apple",
      href: "https://apple.com/",
      src: "../../assets/img/home/apple.svg",
      alt: "Apple",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
