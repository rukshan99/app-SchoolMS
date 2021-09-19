import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import DownloadPDF from '../helpers/DownloadPDF';

class StudentsByAge extends Component {
  state = {
    data: {
      labels: [],
      datasets: [
        {
          label: '# of Students',
          data: [],
          backgroundColor: [],
          borderColor: [],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    }
  };

  componentDidMount = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/students-by-age');

      this.generateBgColors(res.data.studentsByAge.length);

      let ages = this.state.data.labels.slice();
      let ageCounts = this.state.data.datasets[0].data.slice();

      res.data.studentsByAge.forEach(student => {
        ages = [...ages, student._id];
        ageCounts = [...ageCounts, student.count];
        this.setState({
          data: {
            ...this.state.data,
            labels: ages,
            datasets: [
              {
                ...this.state.data.datasets[0],
                data: ageCounts
              }
            ]
          }
        });
      });
    } catch (error) {
      console.log(error);
      alert('something went wrong, please try again later');
    }
  }

  generateBgColors = (i) => {
    let backgroundColors = this.state.data.datasets[0].backgroundColor.slice();
    let borderColors = this.state.data.datasets[0].borderColor.slice();

    for (let j = 0; j < i; j++) {
      const color1 = Math.floor(Math.random() * 256);
      const color2 = Math.floor(Math.random() * 256);
      const color3 = Math.floor(Math.random() * 256);
      backgroundColors.push(`rgba(${color1}, ${color2}, ${color3}, 0.2)`);
      borderColors.push(`rgba(${color1}, ${color2}, ${color3}, 1)`);
    }
    this.setState({
      data: {
        ...this.state.data,
        datasets: [
          {
            ...this.state.data.datasets[0],
            backgroundColor: backgroundColors,
            borderColor: borderColors
          }
        ]
      }
    });
  }

  render() {
    return (
      <div id="report" className="report">
        <div className='header'>
          <h1 className='title'>Students By Ages Report</h1>
        </div>
        <DownloadPDF
          downloadFileName="Students by Age"
          rootElementId="report"
        />
        <Bar data={this.state.data} options={this.state.options} />X
      </div>
    );
  }
}

export default StudentsByAge;