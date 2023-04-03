module.exports = ({ DataTypes, sequelize, Model }) => {
    class PointDown extends Model {
        static initial() {
            return this.init(
                {
                    point: {
                        type: DataTypes.INTEGER,
                    },
                },
                {
                    sequelize,
                }
            );
        }
        static assosiate(models) {
            this.belongsTo(models.User, {
                foreignKey: "userid",
            });
            this.belongsTo(models.Quiz, {
                foreignKey: "quizid",
            });
        }
    }
    PointDown.initial();
};

