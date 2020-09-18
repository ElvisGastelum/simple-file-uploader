const commandLineCode = `
pwd
/home/elvis/dev/github.com/elvisgastelum/react-config
cat README.md
# react-config
![Home Page React Template](https://user-images.githubusercontent.com/43228550/90504941-ab681580-e106-11ea-8035-22b53e5af46f.png)

\`\`\`bash
git clone https://github.com/ElvisGastelum/react-config project-name
cd project-name
npm install
npm start
\`\`\`

Or create repo form this template

## This template is for create a basic custom configuration of any project of Reactjs

With this repo you can:
- Code a react app in minutes
- Set absolute paths, or use the '@'
  - Example:
\`\`\`js
// 'src/components' set
import Header from 'components/Header';

// and not
import Header from '../../../components/Header';

// 'src/' set
import Header from '@/pages/Home';

// and not
import Header from '../../../pages/Home';
\`\`\`
- The paths set are
  * '@' to src folder
    - 'components' to src/components
    - 'pages' to src/pages

`.trim();

export default commandLineCode;