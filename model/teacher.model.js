module.exports = (sequelize, Sequelize) => {
    const Teacher = sequelize.define("teacher", {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: Sequelize.STRING(100),
        password:Sequelize.STRING(100)
    }, {
        timestamps: false
    });
    return Teacher;
};
