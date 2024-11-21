<p align="center">
    <img src="./img/ExploryQ.png" alt="ExploryQ Logo" height="70">
</p>

<h2 align="center">Frontend Repository</h2>

> Developed by [Sebastian Urdanegui](https://github.com/SebastianUrdaneguiBisalaya), [Leslie Zarate](https://github.com/LeslieZT), [Alexandra Rios](https://github.com/alexamibco) and [Ana Rivas](https://github.com/Cabrakana).

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![React Hook Form](https://img.shields.io/badge/React%20Hook%20Form-%23EC5990.svg?style=for-the-badge&logo=reacthookform&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Zod](https://img.shields.io/badge/zod-%233068b7.svg?style=for-the-badge&logo=zod&logoColor=white)

<p align="center">
    <a href="https://exploryq.vercel.app" align="center">
        <img src="https://img.icons8.com/color/32/000000/link.png" alt="Website Link" />
    </a>
    <a href="https://www.figma.com/design/fXW7IPhMuYhg3kaVGTTiwD/App-To-Find-Events?node-id=0-1&m=dev&t=SPPGu7PemDSKcoaJ-1">
        <img src="https://img.icons8.com/color/32/000000/figma.png" alt="Figma Link" />
    </a>
    <a href="https://alexamibco.atlassian.net/jira/software/projects/EVENT/boards/67/timeline?shared=&atlOrigin=eyJpIjoiYzM0NDc1YWU0Y2Q1NGJkMzkzZWJhYjM4NDdjNWFlNzUiLCJwIjoiaiJ9">
        <img src="https://img.icons8.com/color/32/000000/jira.png" alt="Jira Link" />
    </a>
    <a href="https://github.com/SebastianUrdaneguiBisalaya/App-To-Find-Events-Backend">
        <img src="https://img.icons8.com/color/32/000000/nodejs.png" alt="Backend Link" />
    </a>
</p>

<div>
    <h2>Documentation</h2>
</div>

### Table of Contents

- [Table of Contents](#table-of-contents)
- [What is the Problem That Our Idea Solves?](#what-is-the-problem-that-our-idea-solves)
- [What Are the Perks of Our Idea?](#what-are-the-perks-of-our-idea)
- [How does the website work?](#how-does-the-website-work)
  - [Home](#home)
    - [Screen 1: Trending Events](#screen-1-trending-events)
    - [Screen 2: This Week Events](#screen-2-this-week-events)
    - [Screen 3: Upcoming Events](#screen-3-upcoming-events)
    - [Screen 4: Detail Events](#screen-4-detail-events)
  - [Auth](#auth)
    - [Screen 5: Create an account](#screen-5-create-an-account)
    - [Screen 6: Login](#screen-6-login)
  - [Features of the user](#features-of-the-user)
    - [Screen 7: Favorite Events](#screen-7-favorite-events)
    - [Screen 8: History Tickets](#screen-8-history-tickets)
    - [Screen 9: User Profile](#screen-9-user-profile)

### What is the Problem That Our Idea Solves?

> A lot of people around the world are suffering from the lack of access to information about events that are hapenning in their area. This is a problem that we want to solve with our idea.

### What Are the Perks of Our Idea?

We have developed a platform (website) that allows users to view different events occurring in their area.

> Users can navigate through three distinct event sections: **Trending Events**, **This Week Events** and **Upcoming Events**.

> Users can access detailed information about events, such as the date, time, location, description, and more.

> Various filters are available for users to refine their search, including date ranges, event name, event category, and sorting by minimum price.

> Users can register and create an account on the platform.

> Users can purchase event tickets through Stripe, which is integrated into the platform.

> Users can like or dislike events and view all liked events in a personalized section.

> Users who purchase tickets can view their ticket history for each event in a dedicated section.

### How does the website work?

#### Home

1. Users can browse through the three main event sections, apply various filters, and view detailed event information without logging in.

##### Screen 1: Trending Events

**Business Logic:** These events are sorted by popularity, with the most popular events appearing at the top. Popularity is measured based on the number of users who purchase tickets for the event. Additionally, the events are sorted by ascending event date. The price displayed for the event is derived from the minimum ticket price available.

![Home/TrendingEvents](./img/trendingevents.png)

##### Screen 2: This Week Events

**Business Logic:** These events are selected based on their dates, starting from today and extending up to seven (7) days from the current date. The events are sorted in ascending order by date.

![Home/ThisWeekEvents](./img/thisweek.png)

##### Screen 3: Upcoming Events

**Business Logic:** These events are selected based on their dates, starting from seven (7) days after the current date. They are also sorted in ascending order by date.

![Home/UpcomingEvents](./img/upcoming.png)

##### Screen 4: Detail Events

![Home/DetailEvents](./img/detailevent.png)

#### Auth

2. If the user want to enjoy the more features of the website, he/shet must login. In the case the user does not have an account, he/she can create an account.

##### Screen 5: Create an account

![Auth/Login](./img/signup.png)

##### Screen 6: Login

![Auth/Login](./img/login.png)

#### Features of the user

##### Screen 7: Favorite Events

![UserFeature/Favorites](./img/login.png)

##### Screen 8: History Tickets

![UserFeature/HistoryTickets](./img/login.png)

##### Screen 9: User Profile

![Auth/Profile](./img/login.png)
