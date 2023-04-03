import { Model, Table, Column, AllowNull, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import User from "./user.model";
import Quiz from "./quiz.model";

@Table({
    tableName: "PointUp",
    omitNull: true,
    timestamps: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
})
class PointUp extends Model {
    @ForeignKey(() => Quiz)
    @Column({
        type: DataType.INTEGER,
    })
    public quizId!: number;

    @Column({
        type: DataType.INTEGER,
    })
    public point!: number;

    @ForeignKey(() => User)
    @Column({
        type: DataType.STRING,
    })
    public userId!: string;

    @BelongsTo(() => Quiz, { foreignKey: "quizId" })
    public quiz!: Quiz;

    @BelongsTo(() => User)
    public user!: User;
}

export default PointUp;

// import { DataTypes, Model, Optional } from "sequelize";
// import { sequelize } from ".";

// import { User } from "./user.model";
// import { Quiz } from "./quiz.model";

// export interface PointDownModel {
//     point: number;
//     userId: string;
//     quizId: number;
// }

// class PointDown extends Model<PointDownModel> implements PointDownModel {
//     public readonly id!: number;

//     public point!: number;
//     public userId!: string;
//     public quizId!: number;

//     public createdAt!: Date;
//     public updatedAt!: Date;

//     public static initialize(): void {
//         this.init(
//             {
//                 point: DataTypes.INTEGER,
//                 userId: DataTypes.INTEGER,
//                 quizId: DataTypes.INTEGER,
//             },
//             {
//                 sequelize,
//                 modelName: "PointDown",
//             }
//         );
//     }

//     public static associate(): void {
//         this.belongsTo(User, {
//             foreignKey: "userId",
//             as: "user",
//         });
//         this.belongsTo(Quiz, {
//             foreignKey: "quizId",
//         });
//     }
// }

// PointDown.initialize();

// export { PointDown };

