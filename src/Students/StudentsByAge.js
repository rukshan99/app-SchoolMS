import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

class StudentsByAge extends Component {
  state = {
    data: {
      labels: [],
      datasets: [
        {
          label: '# of Students',
          data: [],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
          ],
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
            datasets:[
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
      borderColors.push(`rgba(${color1}, ${color2}, ${color3}, 0.1)`);
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
      <React.Fragment>
        <div className='header'>
          <h1 className='title'>Students By Ages Report</h1>
        </div>
        <Bar data={this.state.data} options={this.state.options} />
      </React.Fragment>
    );
  }
}

export default StudentsByAge;