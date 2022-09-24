# auto_pagination_without_reload

## Getting Stared

:::Project Details:::
 - Language: NodeJs
 - FrameWork: SailsJs
 - axios external API call

Step to follow once you clone project from GitHub Repository...
1. folder name [axios_external_api_call] need seperate from current project folder.
2. Both project run inter-dependent to each other.
3. Once seperate directory created apply command for npm installation. [https://docs.npmjs.com/cli/v6/commands/npm-install]
4. First you need to up project with name [axios_external_api_call] with command - sails lift.
5. After that dependent project with name [auto_pagination_without_reload] run with command - sails lift.
6. [axios_external_api_call] will run default on PORT 1337 (Note: You can change if you want)
7. [auto_pagination_without_reload] will run on PORT 9000.
8. Once you done with above given step, go to the browser & call 

```
localhost:9000
```

Now your auto pagination project will running !!!

Main feature: Every page scroll end new page API will call without any reload same as instagram/facebook.
