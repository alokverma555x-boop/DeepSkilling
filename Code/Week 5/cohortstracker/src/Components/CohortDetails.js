import styles from '../CohortDetails/module.css';

const CohortDetails = () => {
  const cohortsData = [
    {
      id: 1,
      name: 'INTADMDF10',
      title: '.NET FSD',
      startedOn: '22-Feb-2022',
      status: 'Scheduled',
      coach: 'Aathma',
      trainer: 'Jojo Jose'
    },
    {
      id: 2,
      name: 'ADM21JF014',
      title: 'Java FSD',
      startedOn: '10-Sep-2021',
      status: 'Ongoing',
      coach: 'Apoorv',
      trainer: 'Elisa Smith'
    },
    {
      id: 3,
      name: 'CDBJF2025',
      title: 'Java FSD',
      startedOn: '24-Dec-2021',
      status: 'Ongoing',
      coach: 'Aathma',
      trainer: 'John Doe'
    }
  ];

  const getStatusColor = (status) => {
    return status.toLowerCase() === 'ongoing' ? '#2ecc71' : '#3498db';
  };

  const getNameColor = (index) => {
    return index === 0 ? '#3498db' : '#27ae60';
  };

  return (
    <div>
      <h1 style={{ marginLeft: '20px' }}>Cohorts Details</h1>
      <div className={styles.container}>
        {cohortsData.map((cohort, index) => (
          <div key={cohort.id} className={styles.box}>
            <h3 style={{ color: getNameColor(index), margin: '0 0 15px 0' }}>
              {cohort.name} -{cohort.title}
            </h3>
            <dl>
              <dt>Started On</dt>
              <dd>{cohort.startedOn}</dd>
              <dt>Current Status</dt>
              <dd style={{ color: getStatusColor(cohort.status) }}>{cohort.status}</dd>
              <dt>Coach</dt>
              <dd>{cohort.coach}</dd>
              <dt>Trainer</dt>
              <dd>{cohort.trainer}</dd>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CohortDetails;

