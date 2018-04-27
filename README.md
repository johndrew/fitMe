# fitMe
A prototype for FitMe: a webapp to connect fitness professionals with clients

## Background
A friend, studying business entrepreneurship at the University of Tampa, asked if I would make him a prototype webapp for him for a project. He wanted something tangible he could show at two events: an expo and an investor summit. Part of his motivation was of course his grade in the course for this project, but he also wanted to use this as a potential opportunity to gain investors and explore this as a business when he graduated. The investor summit would host real investors, who, if they liked the product, would consider investing for these students to grow the business once they graduated.

## Development
The first thing I did was create a [requirements document](https://docs.google.com/document/d/1F5vhM3lmeVD9cRoMxZ9E3PFW0235Gb60azl1BbuosKE/edit?usp=sharing) so my friend, his team, and I would all be on the same page. With less then four weeks, one of which I was travelling, we needed to define a strict MVP so he and his team would have something workable that would showcase their idea.

In order to complete something with the limited time I had, and to keep costs as low as possible, I decided to not create any backend. This meant all of the data needed to live in the frontend app, and any actions that would typically need a network request had to be mocked.

I chose to use React.js for this project because I was looking for more opportunites to use the technology (I hadn't used it professionally at that point), and I knew I could utilize a component library to speed up development. Another reason for using a component library was to create the best app "look" that I could in a short period of time. Since the goal of this app was to create something thank could potentially gain investor support, it was extremely important that the app look better than it functioned, meaning that the look of the app would always take prioritiy over the functionality of the app. I wanted to use material design, since it is a widely used design standard, and found a component library that would do the hard work for me.

I had been experimenting with the Serverless Framework for several months, and had recently setup a project using the [serverless-single-page-app-plugin](https://www.npmjs.com/package/serverless-single-page-app-plugin) to aid in hosting the app with AWS CloudFront CDN Service. I used the same approach for this project.

## Problems I Faced

TBD

## What I learned

TBD

## Next steps

1. Apply unit and snapshot tests
2. Understand Deployment Issues, perhaps applying logging, metrics, or other techniques for increased visibility
3. Experiment with GraphQL to supply data
4. Experiment with React Native
