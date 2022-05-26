import React, { Component } from "react";
import Loading from "./Loading"
import Panel from "./Panel"
import classnames from "classnames";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

class Dashboard extends Component {
  state = {
    loading: false,
    focused: null
  };
  
  selectPanel(id) {
    if(this.state.focused === id) {
      this.setState({ focused: null });
    }
    else {
      this.setState({ focused: id });
    }    
  };

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
     });

    const selectedData = !this.state.focused ? data : [data[this.state.focused-1]];
    
    const panelList = selectedData.map((panel) => {

      return(
        <Panel 
            key={panel.id}
            id={panel.id} 
            label={panel.label}
            value={panel.value}
            onSelect={() => this.selectPanel(panel.id)}        
          />) 
    });


    if (this.state.loading) {
      return <Loading />;
    }
    return <main className={dashboardClasses}>{ panelList }</main>;
  }
}
export default Dashboard;
