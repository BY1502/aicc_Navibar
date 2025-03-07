import React from 'react';
import {
  communityLinks,
  platformLinks,
  resourcesLinks,
} from '../constants/data';
import { Link } from 'react-router-dom';
import Footercontents from './Footercontents';

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-10 border-neutral-700">
      <div className="container grid lg:grid-cols-3 grid-cols-2 gap-x-4 gap-y-10">
        <Footercontents title="Resources" linkData={resourcesLinks} />
        <Footercontents title="Platform" linkData={platformLinks} />
        <Footercontents title="Community" linkData={communityLinks} />
      </div>
    </footer>
  );
};

export default Footer;
