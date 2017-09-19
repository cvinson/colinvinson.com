import React from 'react';
import Mailto from 'react-mailto';
import Avatar from 'material-ui/Avatar';
import { Card, CardMedia, CardTitle, CardText } from 'material-ui/Card';
import { List, ListItem } from 'material-ui/List';
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import EmailIcon from 'material-ui/svg-icons/communication/email';
import CodeIcon from 'material-ui/svg-icons/action/code';
import ResumeIcon from 'material-ui/svg-icons/editor/insert-drive-file';
import SchoolIcon from 'material-ui/svg-icons/social/school';
import './QuickInfo.css';

const technologies = [
  {
    name: 'React',
    logo: 'https://logo.clearbit.com/reactjsday.it'
  },
  {
    name: 'Node.js',
    logo: 'https://logo.clearbit.com/nodejs.org'
  },
  {
    name: 'Angular',
    logo: 'https://logo.clearbit.com/angularjs.org'
  },
  {
    name: 'Backbone.js',
    logo: 'https://logo.clearbit.com/backbonejs.org'
  },
  {
    name: 'Webpack',
    logo: 'https://cdn.worldvectorlogo.com/logos/webpack.svg'
  },
  {
    name: 'Babel',
    logo: 'http://logo.clearbit.com/babeljs.io'
  },
  {
    name: 'Lodash',
    logo: 'http://logo.clearbit.com/lodash.com'
  },
  {
    name: 'Jest',
    logo: 'https://cdn.worldvectorlogo.com/logos/jest.svg'
  },
  {
    name: 'Mocha',
    logo: 'https://cdn.worldvectorlogo.com/logos/mocha.svg'
  },
  {
    name: 'Gulp',
    logo: 'https://logo.clearbit.com/gulpjs.com'
  },
  {
    name: 'Sass',
    logo: 'http://logo.clearbit.com/sass-lang.com'
  },
  {
    name: 'Elasticsearch',
    logo: 'http://logo.clearbit.com/elastic.co'
  },
  {
    name: 'PostgrSQL',
    logo: 'http://logo.clearbit.com/postgresql.org'
  },
  {
    name: 'Redis',
    logo: 'http://logo.clearbit.com/redis.io'
  },
  {
    name: 'RabbitMQ',
    logo: 'http://logo.clearbit.com/rabbitmq.com'
  },
  {
    name: 'Github',
    logo: 'http://logo.clearbit.com/github.com'
  },
  {
    name: 'Atom',
    logo: 'http://logo.clearbit.com/atom.io'
  },
  {
    name: 'Vim',
    logo: 'https://cdn.worldvectorlogo.com/logos/vim.svg'
  }
];

const Overlay = () => (
  <div className="Overlay">
    <Mailto email={['colinvinson', 'protonmail.com'].join('@')} obfuscate={true}>
      <IconButton tooltip="Email Me">
        <EmailIcon />
      </IconButton>
    </Mailto>
    <a href="https://github.com/cvinson">
      <IconButton tooltip="Github">
        <CodeIcon />
      </IconButton>
    </a>
    <a href="https://github.com/cvinson">
      <IconButton tooltip="Download My Resume">
        <ResumeIcon />
      </IconButton>
    </a>
  </div>
);

export default () => {
  return (
    <div className="QuickInfo">
      <Card className="QuickInfoCard">
        <CardMedia overlay={<Overlay />}>
          <img src="http://colinvinson.com/images/me.jpg" alt="Me relaxing by some trees." width="200"/>
        </CardMedia>
      </Card>
      <Card className="QuickInfoCard Education">
        <CardTitle title="Education" className="EducationTitle" />
        <CardText className="EducationText">
          <List>
            <ListItem
              leftAvatar={<Avatar icon={<SchoolIcon />} />}
              primaryText="Georgia Institute of Technology"
              secondaryText="B.S. Computer Science, May 2010" />
          </List>
          Coursework Including: Software Engineering, Objects and Design, Data Structures, Design and Analysis of Algorithms, Operating System Design, Database Design, Emerging Database Technologies
        </CardText>
      </Card>
      <Card className="QuickInfoCard Technology">
        <CardTitle title="Selected Technology" className="TechnologyTitle" />
        <GridList className="TechnologyGrid" cellHeight="auto" cols={6}>
          {technologies.map((tech) => (
            <GridTile
              key={tech.name}>
              <img src={tech.logo} alt={tech.name} width="44"/>
            </GridTile>
          ))}
        </GridList>
      </Card>
    </div>
  );
}
