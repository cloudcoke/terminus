module.exports = ({ sequelize, DataTypes, Model }) => {
    class User extends Model {
        static initial() {
            return this.init(
                {
                    userid: {
                        type: DataTypes.STRING(30),
                        primaryKey: true,
                    },
                    userpw: {
                        type: DataTypes.STRING(64),
                        allowNull: false,
                    },
                    nuckName: {
                        type: DataTypes.STRING(30),
                        allowNull: false,
                    },
                },
                {
                    sequelize,
                }
            );
        }
        static assosiate(models) {
            this.hasMany(models.PointUp, {
                foreignKey: "userid",
            });
            this.hasMany(models.PointDown, {
                foreignKey: "userid",
            });
        }
    }
    User.initial();
};

