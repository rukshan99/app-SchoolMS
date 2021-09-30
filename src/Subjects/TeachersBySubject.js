import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';
import DownloadPDF from '../helpers/DownloadPDF';

class TeachersBySubject extends Component {
  state = {
    data: {
      labels: [],
      datasets: [
        {
          label: 'Number of Teachers',
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
      const res = await axios.get('http://localhost:8000/api/v1/teachers-by-subject');
      
      this.generateBgColors(res.data.teachersBySubject.length);

      let subjects = this.state.data.labels.slice();
      let subjectCounts = this.state.data.datasets[0].data.slice();

      res.data.teachersBySubject.forEach(sbjt => {
        subjects = [...subjects, sbjt.name];
        subjectCounts = [...subjectCounts, sbjt.count];
        this.setState({
          data: {
            ...this.state.data,
            labels: subjects, 
            datasets:[
              {
                ...this.state.data.datasets[0],
                data: subjectCounts
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
          <h1 className='title'>Teachers By Subject Report</h1>
        </div>
        <DownloadPDF
          downloadFileName="Teachers by Subject"
          rootElementId="report"
        />
        <Bar data={this.state.data} options={this.state.options} />
      </div>
    );
  }
}

export default TeachersBySubject;