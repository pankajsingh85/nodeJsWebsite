module.exports = (sequelize, Sequelize) => {
    const Student = sequelize.define("student", {
        rollno: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        name: Sequelize.STRING(100),
        dateOfBirth: {
            type: Sequelize.DATEONLY,
            get: function() { 
               var myDate = new Date(this.getDataValue('dateOfBirth'));
              return myDate
                .toLocaleDateString('hi-IN', { timeZone: 'UTC' });
            }
          },
        score: Sequelize.INTEGER
    }, {
        timestamps: false
    });
    return Student;
};
