import React from 'react';
import IconSearch from 'terra-icon/lib/icon/IconSearch';
import IconTile from 'terra-icon/lib/icon/IconTile';
import Button from 'terra-button';

import ApplicationModal from '@cerner/terra-application/lib/application-modal/ApplicationModal';
import { PrimaryNavigationLayout, NavigationItem } from '@cerner/terra-application/lib/layouts';
import ApplicationConceptBannerProvider from '@cerner/terra-application/lib/application-container/ApplicationConceptBannerProvider';
import ModalManager from '@cerner/terra-application/lib/modal-manager';
import DemographicsBanner from 'terra-demographics-banner';
import classNamesBind from 'classnames/bind';
import { ConceptContext } from '../providers/ConceptProvider';
import ApplicationSwitcherModal from '../modals/_ApplicataionSwitcherModal';

import Page1 from '../pages/Page1';
import Page5 from '../pages/Page5';
import Page6 from '../pages/Page6';
import Page7 from '../pages/Page7';
import Page8 from '../pages/Page8';
import NavBLayout from './NavBLayout';
import NavCLayout from './NavCLayout';
import NavDLayout from './NavDLayout';
import NavELayout from './NavELayout';

import ConceptBanner from '../shared/ConceptBanner';
import NotAPage from '../shared/NotAPage';

import styles from './DemoApplicationNavigationLayout.module.scss';

const cx = classNamesBind.bind(styles);

const DemoApplicationNavigationLayout = () => {
  const conceptContext = React.useContext(ConceptContext);

  const [navigationState, setNavigationState] = React.useState('nav-A');
  const [showSearchModal, setShowSearchModal] = React.useState(false);
  const [showDetailsModal, setShowDetailsModal] = React.useState(false);
  const [showAppSwitcherModal, setShowAppSwitcherModal] = React.useState(false);

  if (!conceptContext.data) {
    return (
      <>
        <PrimaryNavigationLayout
          extensionItems={[{
            key: 'search',
            icon: <IconSearch />,
            text: 'Search',
          }, {
            key: 'appSwitch',
            icon: <IconTile />,
            text: 'Application Switcher',
          }]}
          onSelectExtensionItem={(itemKey) => {
            if (itemKey === 'search') {
              setShowSearchModal(true);
            }
            if (itemKey === 'appSwitch') {
              setShowAppSwitcherModal(true);
            }
          }}
          utilityItems={[{
            key: 'custom-utility-item',
            text: 'Custom Utility Item',
            onSelect: () => {
              console.log('Custom Utility Item selected');
            },
          }]}
          onSelectHelp={() => {}}
          // activeNavigationKey={conceptContext.data ? navigationState : undefined}
          // onSelectNavigationItem={(key) => { setNavigationState(key); }}
          // renderNavigationFallback={() => <div>404</div>}
          // renderLayout={() => <NavCLayout />}
        >
          <div> Choose a patient </div>
        </PrimaryNavigationLayout>
        {showSearchModal && (
          <ApplicationModal title="Search" size="large" onRequestClose={() => { setShowSearchModal(false); }}>
            <div style={{ padding: '1rem' }}>
              <Button text="1" onClick={() => { conceptContext.updateData('1'); setShowSearchModal(false); }} />
              <Button text="2" onClick={() => { conceptContext.updateData('2'); setShowSearchModal(false); }} />
              <Button text="3" onClick={() => { conceptContext.updateData('3'); setShowSearchModal(false); }} />
            </div>
          </ApplicationModal>
        )}
        {showAppSwitcherModal && (
        <ApplicationSwitcherModal />
        )}
      </>
    );
  }

  return (
    <>
      <ApplicationConceptBannerProvider
        conceptDescription={`Concept ${conceptContext.data}`}
        layoutBanner={conceptContext.data ? (
          <div
            style={{ padding: '.4rem', backgroundColor: '#014979' }}
          >
            <DemographicsBanner
              className={cx('rounded')}
              age="25 Years"
              dateOfBirth="May 9, 1993"
              gender="Male"
              personName={`Patient ${conceptContext.data}`}
            />
          </div>

        ) : undefined}
        modalBanner={conceptContext.data ? (
          <DemographicsBanner
            age="25 Years"
            dateOfBirth="May 9, 1993"
            gender="Male"
            personName={`Patient ${conceptContext.data}`}
          />
        ) : undefined}
      >
        <ModalManager>
          <PrimaryNavigationLayout
            extensionItems={[{
              key: 'search',
              icon: <IconSearch />,
              text: 'Search',
            }, {
              key: 'appSwitch',
              icon: <IconTile />,
              text: 'Application Switcher',
            }]}
            onSelectExtensionItem={(itemKey) => {
              if (itemKey === 'search') {
                setShowSearchModal(true);
              }
              if (itemKey === 'appSwitch') {
                setShowAppSwitcherModal(true);
              }
            }}
            utilityItems={[{
              key: 'custom-utility-item',
              text: 'Custom Utility Item',
              onSelect: () => {
                console.log('Custom Utility Item selected');
              },
            }]}
            onSelectHelp={() => {}}
            // activeNavigationKey={conceptContext.data ? navigationState : undefined}
            // onSelectNavigationItem={(key) => { setNavigationState(key); }}
            // renderNavigationFallback={() => <div>404</div>}
            renderLayout={() => <NavCLayout />}
          />
        </ModalManager>
        {showDetailsModal && (
          <ApplicationModal title="Concept Details" size="small" onRequestClose={() => { setShowDetailsModal(false); }}>
            <div style={{ padding: '1rem' }}>
              <p>Details go here.</p>
            </div>
          </ApplicationModal>
        )}
      </ApplicationConceptBannerProvider>
      {showSearchModal && (
        <ApplicationModal title="Search" size="large" onRequestClose={() => { setShowSearchModal(false); }}>
          <div style={{ padding: '1rem' }}>
            <Button text="1" onClick={() => { conceptContext.updateData('1'); setShowSearchModal(false); }} />
            <Button text="2" onClick={() => { conceptContext.updateData('2'); setShowSearchModal(false); }} />
            <Button text="3" onClick={() => { conceptContext.updateData('3'); setShowSearchModal(false); }} />
          </div>
        </ApplicationModal>
      )}
      {showAppSwitcherModal && (
        <ApplicationSwitcherModal onRequestClose={() => { setShowAppSwitcherModal(false); }} />
      )}
    </>
  );
};

export default DemoApplicationNavigationLayout;
