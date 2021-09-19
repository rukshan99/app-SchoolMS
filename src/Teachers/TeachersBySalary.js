import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import DownloadPDF from '../helpers/DownloadPDF';

class TeachersBySalary extends Component {
  state = {
    data: {
      labels: [],
      datasets: [
        {
          label: '# of Teachers',
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
      const res = await axios.get('http://localhost:8000/api/v1//teachers-by-salary');

      this.generateBgColors(res.data.teachersBySalary.length);

      let salary = this.state.data.labels.slice();
      let salaryCounts = this.state.data.datasets[0].data.slice();

      res.data.teachersBySalary.forEach(teacher => {
        salary = [...salary, teacher._id];
        salaryCounts = [...salaryCounts, teacher.count];
        this.setState({
          data: {
            ...this.state.data,
            labels: salary, 
            datasets:[
              {
                ...this.state.data.datasets[0],
                data: salaryCounts
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
          <h1 className='title'>Teachers By Salary Report</h1>
        </div>
        <DownloadPDF
          downloadFileName="Teachers by Salary"
          rootElementId="report"
        />
        <Bar data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default TeachersBySalary;