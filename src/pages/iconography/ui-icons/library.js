import React from 'react';
import Layout from 'gatsby-theme-carbon/src/templates/Default';
import { IconLibrary } from '../../../../plugins/gatsby-theme-carbon-svgs';

const frontmatter = {
  label:
    'Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
  title: 'UI icons',
  description:
    'Icons are visual symbols used to represent ideas, objects, or actions. They communicate messages at a glance, afford interactivity, and draw attention to important information.',
  tabs: ['Library', 'Design', 'Usage', 'Contribute'],
};

const LibraryPage = ({ pageContext, ...rest }) => (
  <Layout pageContext={{ ...pageContext, frontmatter }} {...rest}>
    <IconLibrary site="idl" />
  </Layout>
);

export default LibraryPage;
