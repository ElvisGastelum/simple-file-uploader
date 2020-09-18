# react-config
![Screenshot_2020-08-18 React App](https://user-images.githubusercontent.com/43228550/90573959-88704c80-e16c-11ea-88ee-626f28de0a88.png)

```bash
git clone https://github.com/ElvisGastelum/react-config project-name
cd project-name
npm install
npm start
```

Or create repo form this template

## This template is for create a basic custom configuration of any project of Reactjs

With this repo you can:
- Code a react app in minutes
- Set absolute paths, or use the '@'
  - Example:
```js
// 'src/components' set
import Header from 'components/Header';

// and not
import Header from '../../../components/Header';

// 'src/' set
import Header from '@/pages/Home';

// and not
import Header from '../../../pages/Home';
```
- The paths set are
  * '@' to src folder
    - 'components' to src/components
    - 'pages' to src/pages
