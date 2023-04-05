import { Model, Table, Column, AllowNull, DataType, PrimaryKey, HasMany, BelongsTo, ForeignKey } from "sequelize-typescript";
import Comment from "./comment.model";
import PointDown from "./pointdown.model";
import PointUp from "./pointup.model";
import Token from "./token.model";

@Table({
    tableName: "User",
    omitNull: true,
    timestamps: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
})
class User extends Model {
    @HasMany(() => PointUp)
    public PointUp!: PointUp[];

    @HasMany(() => PointDown)
    public pointDowns!: PointDown[];

    @HasMany(() => Token)
    public token!: Token[];

    @HasMany(() => Comment)
    public comment!: Comment[];

    @ForeignKey(() => User)
    @PrimaryKey
    @AllowNull(false)
    @Column({
        type: DataType.STRING(32),
    })
    public userId!: string;

    @AllowNull(false)
    @Column({
        type: DataType.STRING(64),
    })
    public userPw!: string;

    // @AllowNull(false)
    // @Column({
    //     type: DataType.STRING(32),
    // })
    // public nickName!: string;
}

export default User;

// import { DataTypes, Model, Optional } from "sequelize";
// import { sequelize } from ".";

// import { PointDown } from "./pointup.model";
// import { PointUp } from "./pointdown.model";

// interface UserModel {
//     userid: string;
//     userpw: string;
//     nickName: string;
// }

// class User extends Model<UserModel> implements UserModel {
//     public readonly id!: number;

//     public userid!: string;
//     public userpw!: string;
//     public nickName!: string;

//     public static initialize(): void {
//         this.init(
//             {
//                 userid: {
//                     type: DataTypes.STRING(30),
//                     primaryKey: true,
//                 },
//                 userpw: {
//                     type: DataTypes.STRING(64),
//                     allowNull: false,
//                 },
//                 nickName: {
//                     type: DataTypes.STRING(30),
//                     allowNull: false,
//                 },
//             },
//             {
//                 sequelize,
//                 modelName: "User",
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

// User.initialize();

// export { User };

