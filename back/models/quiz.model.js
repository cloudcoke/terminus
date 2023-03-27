module.exports = ({ DataTypes, sequelize, Model }) => {
    class Quiz extends Model {
        static initial() {
            return this.init(
                {
                    command: {
                        type: DataTypes.STRING(64),
                        allowNull: false,
                    },
                    prompt: {
                        type: DataTypes.TEXT(),
                        allowNull: false,
                    },
                    answer: {
                        type: DataTypes.TEXT(),
                        allowNull: false,
                    },
                    setting: {
                        type: DataTypes.TEXT(),
                        allowNull: false,
                    },
                    hint: {
                        type: DataTypes.TEXT(),
                        allowNull: true,
                    },
                    difficulty: {
                        type: DataTypes.ENUM("easy", "medium", "hard"),
                        allowNull: false,
                    },
                    category: {
                        type: DataTypes.ENUM("linux", "sql"),
                    },
                },
                {
                    sequelize,
                }
            );
        }
        static assosiate(models) {
            this.hasMany(models.PointUp, {
                foreignKey: "quizid",
            });
            this.hasMany(models.PointDown, {
                foreignKey: "quizid",
            });
        }
    }
    Quiz.initial();
};

