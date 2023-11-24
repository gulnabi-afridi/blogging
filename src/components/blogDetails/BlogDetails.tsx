import React from 'react';
import ComponentWrapper from '../shared/wrappers/ComponentWrapper';
import Details from './details/Details';
import LatestArticles from './latestArticles/LatestArticles';

const BlogDetails = () => {
  return (
    <ComponentWrapper style='py-10'>
      <div className='w-full grid lg:grid-cols-[2fr,1fr] gap-16'>
        <Details />
        <LatestArticles />
      </div>
    </ComponentWrapper>
  );
};

export default BlogDetails;
