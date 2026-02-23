# odin-rock-paper-scissors
Rock Paper Scissors project from The Odin Project

Project can be accessed from: https://smallerchaos.github.io/odin-rock-paper-scissors/

## Learnings and Reflections from V2 (HTML UI only)
I found that having buttons kick off each of the steps in the game greatly simplified the code necessary for the game. I also floundered a lot at the beginning since I couldn't really figure out how to structure the JS file in a logical manner (e.g. what functions/functionality should be available when). I also tried to inject all of the HTML via JavaScript at first but that made it so much more confusing for me to remember what the HTML structure was supposed to be so I ended up moving the entirety of the HTML into a separate HTML file and adding or removing a 'hidden' class as necessary. (Perhaps this can be considered a separation of concerns in a positive way?) This ended up making it a lot easier for me to make progress on the project and figure out what parts to show at what stage in the game.

Overall, I'm pretty happy with how it turned out. I'm still going a bit above and beyond by allowing the user to set the number of rounds and then start a new game but I'm happy I was able to get that to work. :)

## Learnings and Reflections from V1 (pure JS)
I think I definitely went beyond the scope of the project a bit by:
1. Trying to eliminate all external variables (which might be why some of my recursive functions don't work) since I read somewhere that it's best to reduce the number of global variables for security reasons.
2. Trying to work on treating cases when users don't input valid choice (of rock, paper, or scissors) or a valid number for rounds.
3. Prompting the user to input the number of rounds they would like to play rock, paper, scissors.

The bugs are:
- When there is a tie, the scores for that game return 0,0 rather than returning the right score when either the player or computer wins. (Probably a problem with recursive functions.)
- When the user enters anything other than a number for the number of rounds, it somehow gets caught there and says it's not a number even though it is. (Probably a problem with recursive functions.)

The course says that we will come back to this project later so I will try to rectify these issues when I revisit this project.

Additionally, I discovered some new quirks when using the LivePreview plugin of VSCode:
1. It doesn't support alerts and prompts and will get stuck if you try to use them there instead of in an actual browser like Chrome. Even if you close the window and open it again, it'll open the same LivePreview which gets stuck. When it gets stuck in Chrome, sometimes you can't even open the dev tools or change the code to fix the problem.
2. The LivePreview getting stuck on old (infinite loop) code even after closing and opening can be fixed by immediately closing the tab when you reopen the window. To get a clean URL for the LivePreview, go into the HTML and comment out the script tag. Once you've gotten the URL and pasted it into a web browser, you can open up the dev tools, and then uncomment the script tag. I had to do this several times when my while loops and recursive functions became infinite loops. 