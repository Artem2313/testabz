import React from 'react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../../assets/logo.svg';

const SideDrawer = ({ show }) => {
  let drawerClasses = 'side-drawer';
  if (show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <nav className={drawerClasses}>
      <div>
        <ul>
          <li>
            <Logo />
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                About me
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Requirements" spy smooth>
                Relationships
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Users" spy smooth>
                Users
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                Sign Up
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                Terms and Conditions
              </Link>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                How it works
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                Partnership
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                Help
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                Leave testimonials
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                Contact us
              </Link>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                Articles
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                Our news
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                Testimonials
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                Licenses
              </Link>
            </span>
          </li>
          <li>
            <span>
              <Link to="Sign up" spy smooth>
                Privacy Policy
              </Link>
            </span>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default SideDrawer;

SideDrawer.propTypes = {
  show: PropTypes.bool.isRequired,
};
