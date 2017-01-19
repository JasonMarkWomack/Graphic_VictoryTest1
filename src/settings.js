import React from 'react';
import './settings.css';
import ToggleButton from 'react-toggle-button'


class settings extends React.Component {
  constructor(props){
    super(props)

    this.state = {}
  }
    render() {
        return (
            <div>
                    <div className="settings_page">
                      <div className="row">
                        <div className="col-md-2 col-md-offset-1">CPU</div>
                        <div className="col-md-2 col-md-offset-6">
                          button
                          {/* <ToggleButton
                          value={ self.state.value || false }
                          onToggle={(value) => {
                            self.setState({
                              value: !value,
                            })
                          }} /> */}
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-2 col-md-offset-1">Temp</div>
                        <div className="col-md-2 col-md-offset-6">Button</div>
                      </div>
                      <div className="row">
                        <div className="col-md-2 col-md-offset-1">Network</div>
                        <div className="col-md-2 col-md-offset-6">Button</div>
                      </div>
                      <div className="row">
                        <div className="col-md-2 col-md-offset-1">Disk</div>
                        <div className="col-md-2 col-md-offset-6">Button</div>
                      </div>
                      <div className="row">
                        <div className="col-md-2 col-md-offset-1">Memory</div>
                        <div className="col-md-2 col-md-offset-6">Button</div>
                      </div>

                      <div className="row">
                        <div className="pid col-md-10 col-md-offset-1">
                            Process ID List

                        </div>
                      </div>


                </div>
            </div>

        )
    }
}

export default settings;
