import React from 'react';
import PropTypes from 'prop-types';
import List, { Item } from 'terra-list';
import Hyperlink from 'terra-hyperlink';
import ApplicationModal from '@cerner/terra-application/lib/application-modal/ApplicationModal';

const propTypes = {
  /**
   * Function called to request closing the modal
   */
  onRequestClose: PropTypes.func.isRequired,
};

const ApplicationSwitcherModal = ({ onRequestClose }) => (
  <ApplicationModal
    title="Application Switcher"
    onRequestClose={onRequestClose}
  >
    <List dividerStyle="bottom-only" paddingStyle="standard">
      <Item>
        <Hyperlink
          data-app-switcher-link
          href="/organizer"
        >
          Organizer
        </Hyperlink>
        <Hyperlink
          href="/organizer"
          variant="external"
          target="_blank"
          style={{ padding: '.5rem' }}
        >
          New Tab
        </Hyperlink>
        <Hyperlink
          href="/organizer"
          variant="external"
          target="organizer"
          rel="opener"
          style={{ padding: '.5rem' }}
        >
          New Tab same target
        </Hyperlink>
      </Item>
    </List>
  </ApplicationModal>
);

ApplicationSwitcherModal.propTypes = propTypes;

export default ApplicationSwitcherModal;
