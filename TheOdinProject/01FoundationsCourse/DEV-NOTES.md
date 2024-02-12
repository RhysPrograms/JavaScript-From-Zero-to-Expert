### Git & GitHub

Git works on your local machine, whereas GitHub is a remote storage facility on the web for all your coding projects. 

A good commit message will explain the why behind your changes. In other words, a commit message describes what problem your changes solve and how it solves them.(Describe the problem your commit solves and how.)

- Use an active voice: “Fix card generator”.
- Avoid using vague commit messages such as “saved” or “updated”.

### HTML

`<p>some text content</p>`
- `<p>` is the opening tag
- `some text content` represents content wrapped within the opening and closing tags
- `</p>` is the closing tag

Some HTML elements do not have a closing tag. These elements just have a single tag, like: `<br>` or `<img>`. They are known as void elements because they are void of any content, there is nothing inside of them. No closing tag means they can’t wrap content like other tags do.

Just as in human relationships, HTML parent elements can have many children. Elements at the same level of nesting are considered to be siblings.

An HTML attribute gives additional information to an HTML element and always goes in the element’s opening tag. An attribute is usually made up of two parts: a name, and a value; however, not all attributes require a value. 

`rel="noopener noreferrer`
The `noopener` value prevents the opened link from gaining access to the webpage from which it was opened. The `noreferrer` value prevents the opened link from knowing which webpage or resource has a link (or ‘reference’) to it. It also includes the noopener behaviour and thus can be used by itself as well. Why do we need this added behaviour for opening links in new tabs? Security reasons. The prevention of access that is caused by noopener prevents phishing attacks where the opened link may change the original webpage to a different one to trick users. This is referred to as tabnabbing. Adding the noreferrer value can be done if you wish to not let the opened link know that your webpage links to it.

### Absolute and relative links

#### Absolute links
Links to pages on other websites on the internet are called absolute links. A typical absolute link will be made up of the following parts: protocol://domain/path. An absolute link will always contain the protocol and domain of the destination.

#### Relative links
Links to other pages within our own website are called relative links. Relative links do not include the domain name, since it is another page on the same site, it assumes the domain name will be the same as the page we created the link on.

By adding ./ you are specifying to your code that it should start looking for the file/directory relative to the current directory. To go to the parent directory we need to use two dots in the relative filepath like this: ../

### Viewing your Project on the Web
If you want to show your work (the project) to others, or submit a solution below, you will need to publish your site so that others can access it from the web, rather than just on your local machine. The good news is that if you have your project on GitHub (as described above), doing this is straightforward.

GitHub allows you to publish web projects directly from a GitHub repository. Doing this will allow you to access your project from `your-github-username.github.io/your-github-repo-name.`
