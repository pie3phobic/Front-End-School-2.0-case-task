
This is my case project created for Front-end school 2.0:

This project is made with Next.JS and TailwindCSS and a few plugins for UI styling. API data is fetched using Next.JS`s function called getServerSideProps (Server-Side Rendering), Next.js will pre-render this page on each request using the data returned by getServerSideProps. To display data on pages we map through response.JSON and pass the data to components that will display it.

App uses a lot of UseStates to track whether the video has finished, which lesson is playing, how many seconds of video has played, has the video finished loading and is ready to play. 
To get data for a course Id is passes as query from clicked component on courses.js page to course.js page that will make an API call using given Id as a parameter and  render course.js page using received data.

To store the duration of watched video we make an object where keys are unique video urls and its' values are seconds of watchtime. When a video is loading in the ReactPlayer we search for a field with the same url as the url that we want to play and use seekTo() function to make the video play from this timestamp. Timestamp value is updated onProgress meaning that every passing second of watchtime this value is reassigned. 

Completed tasks:
-	Set up a landing page for the website.
![localhost_3000_2](https://user-images.githubusercontent.com/115817261/226130116-57223bca-0ddb-48cb-9ae9-9a28e1807fe9.png)
-	Created courses.js page that displays information about the courses (courses` photos, titles, rating, skills, number of lessons).
-	Added pagination to display 10 courses on each page (in total we got 3 pages).
Page with all courses can be reached upon clicking on “Go to courses” button on main page, courses link in web-site header, or “Explore all” on main page's sidebar.
![localhost_3000_courses](https://user-images.githubusercontent.com/115817261/226130203-f85c0fd4-8052-42ff-8c08-82b63ce893f6.png)

After clicking on any course a course.js page will load with specified course`s data.
-	The course-preview video will automatically play after page has loaded.
-	In the Lessons panel you can select another lesson and after clicking it the corresponding video will play.
-	After finishing the lesson there will be a message notifying you that the lesson has ended.
![localhost_3000_courses (1)](https://user-images.githubusercontent.com/115817261/226130382-2dd167ad-3864-45d1-9cd6-88b0d043af08.png)

-	Progress of watched video is saved in local storage even after switching to another course
-	User can see which video is playing by looking into the “Now playing” field. 
-	If the lesson is locked user will be informed about that and the video will not play.

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
