import React from 'react';

import './styles.css';
import Api from '../../api';
import { getUser } from '../../user';
import { SectionTitle, AlertBadge } from '../../components';

import ClockIcon from '../../assets/svg/clock';

class Alerts extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    this.getAlertsList();
  }

  async getAlertsList() {
    const res = await Api.getAlertsList(getUser());
    this.setState({ alerts: res, isLoading: false });
    // eslint-disable-next-line no-console
    console.log(res);
  }

  cleanAlert(alert) {
    // this will be completed for all alert types later
    let icon = null;
    let message = null;
    let action = null;
    let actionLink = null;
    let background = null;

    switch (alert.alertCode) {
      case 'PPFP':
        icon = <ClockIcon />;
        message = `O documento ${alert.docNum} está sem prorrogação por mais de um ano`;
        background = '#f86c72';
        break;
    }

    return { icon, message, action, actionLink, background };
  }

  render() {
    const { alerts, isLoading } = this.state;

    if (isLoading) return <aside>...</aside>;

    return (
      <aside className="alertsWrapper">
        <div className="alertsHeader">
          <SectionTitle value="central de alertas" />
        </div>
        <div className="alertsBody">
          {alerts.map((alert, i) => {
            const { icon, message, action, actionLink, background } = this.cleanAlert(alert);
            return (
              <AlertBadge
                key={alert.docNum + alert.date + i}
                icon={icon}
                iconBg={background}
                message={message}
                action={action}
                actionLink={actionLink}
              />
            );
          })}
        </div>
      </aside>
    );
  }
}

export default Alerts;
