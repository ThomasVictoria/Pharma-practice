
## Question 1: 

Hello,

I'm new to search engines, and there are a lot of concepts I'm not educated on. To make my onboarding smoother, it'd help if you could provide me with some definitions of the following concepts:

-   Records
-   Indexing

I'm also struggling with understanding what types of metrics would be useful to include in the "Custom Ranking."

Cheers, George

  
## Answer: 
Hi George,

Lionel from Algolia.
I hope you're doing well?

I come back to you regarding the questions you asked us. I will answer in detail below.

**What is record?**

In tech industries, usually, a record is an object that gathers a bunch of data. In your record, you will find some data that contains a lot of information about, for example, products you're selling to your clients.


Let's take an example, it will help you to understand this concept. In my screenshot, you're seeing some data/products which have been mapped in the JSON structure. Thus, each product represents a record.

Example of JSON 

    {"Voiture": "BMW","size": "Large","color": "Red"}
    { "Voiture": "AUDI", "size": "Large", "color": "Red" }

**What is "indexing"?**

In the Algolia ecosystem, Indexing means we are going to take your data and organize them based on what is the most important thing for your customers to allow you to display a relevant search.

**Which metrics should I take care of regarding the Custom ranking?**

It's a great question George, based on what I have told you before. Custom ranking is one or more of the fields which are stored on Record object and indexing by Algolia.

It means that Algolia, based on Custom ranking you have configured on your dashboard, will put on top of each search doing by your users, one of your best products based on relevant data.

Your Custom ranking could be the number of "like or number of order" a product has received.

you'll find through this link more information about Custom ranking: https://www.algolia.com/doc/guides/managing-results/must-do/custom-ranking/

Do not hesitate if you've any questions/remarks.

Best, 

Lionel 
