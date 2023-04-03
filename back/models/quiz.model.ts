import { Model, Table, Column, AllowNull, DataType, PrimaryKey, HasMany, BelongsTo, Default } from "sequelize-typescript";
import PointDown from "./pointdown.model";

@Table({
    tableName: "Quiz",
    omitNull: true,
    timestamps: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
})
class Quiz extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    public command!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    public prompt!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    public answer!: string;

    @AllowNull(true)
    @Column({
        type: DataType.STRING,
    })
    public setting!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    public hint!: string;

    @AllowNull(false)
    @Column({
        type: DataType.ENUM("easy", "middle", "hard"),
    })
    public difficulty!: string;

    @Default("linux")
    @AllowNull(false)
    @Column({
        type: DataType.ENUM("linux", "sql"),
    })
    public category!: string;
}

export default Quiz;

// import { DataTypes, Model, Optional } from "sequelize";
// import { sequelize } from ".";

// import PointDown from "./pointup.model";
// import PointUp from "./pointdown.model";

// interface QuizModel {
//     command: string;
//     prompt: string;
//     answer: string;
//     setting: string;
//     hint: string;
//     difficulty: string;
//     category: string;
// }

// class Quiz extends Model<QuizModel> implements QuizModel {
//     public readonly id!: number;

//     public command!: string;
//     public prompt!: string;
//     public answer!: string;
//     public setting!: string;
//     public hint!: string;
//     public difficulty!: string;
//     public category!: string;

//     public static initialize(): void {
//         this.init(
//             {
//                 command: {
//                     type: DataTypes.STRING(64),
//                     allowNull: false,
//                 },
//                 prompt: {
//                     type: DataTypes.TEXT(),
//                     allowNull: false,
//                 },
//                 answer: {
//                     type: DataTypes.TEXT(),
//                     allowNull: false,
//                 },
//                 setting: {
//                     type: DataTypes.TEXT(),
//                     allowNull: false,
//                 },
//                 hint: {
//                     type: DataTypes.TEXT(),
//                     allowNull: true,
//                 },
//                 difficulty: {
//                     type: DataTypes.ENUM("easy", "medium", "hard"),
//                     allowNull: false,
//                 },
//                 category: {
//                     type: DataTypes.ENUM("linux", "sql"),
//                 },
//             },
//             {
//                 sequelize,
//                 modelName: "Quiz",
//             }
//         );
//     }

//     public static associate(): void {
//         this.hasMany(PointUp, {
//             foreignKey: "quizid",
//         });
//         this.hasMany(PointDown, {
//             foreignKey: "quizid",
//         });
//     }
// }

// Quiz.initialize();

// export { Quiz };

