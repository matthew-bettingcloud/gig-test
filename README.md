# GIG Test Documentation

# Assumptions

- There is no category pre selected when loading for the first time
- The final api response of the games will retrieve a smaller number of games instead of 900
- The grid view is pre selected
- The active filters will show up in orange
- It's possible to select multiple filters ex: 1 Category + Search
- The popularity sorting assumes that the most popular game is the smallest `orderNumber`

# Difficulties

- Having no real experience in React might have an impact on the best practices of components not beign used.
- Never worked with redux saga. Even though I've worked with side effects before, this slightly slowed me down because I had to read all the docs.

# Instructions to run the app

This a basic create-react app so the initial setup is basic as well.

1. `git clone [https://github.com/pedronogueirawork/gig-test.git](https://github.com/pedronogueirawork/gig-test.git)`
2. `cd gig-test`
3. `npm install`
4. `npm start`
5. Go to `http://localhost:3000` (the port might be different in your setup)
6. Let me know what I can improve :)