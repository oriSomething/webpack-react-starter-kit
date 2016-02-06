import cx from "classnames";
import React, { PropTypes } from "react";
import { Link } from "react-router";


export default function NavbarLink(props, context) {
  const { router } = context;
  const { children } = props;
  const href = props.href || "/";
  const active = router.isActive(href, true);

  return (
    <li className={cx("nav-item", { active })}>
      <Link className="nav-link" to={href}>
        {children}
        {active ? " " : null}
        {active ?
          <span className="sr-only">(current)</span>
        : null}
      </Link>
    </li>
  );
}

NavbarLink.displayName = "NavbarLink";

NavbarLink.contextTypes = {
  router: PropTypes.object
};

NavbarLink.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string
};
