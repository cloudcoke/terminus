import { Column, AllowNull, PrimaryKey, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from "./user.model";

@Table({
    tableName: "Token",
    omitNull: true,
    timestamps: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
})
class Token extends Model {
    @ForeignKey(() => User)
    @Column({
        type: DataType.STRING,
    })
    public userId!: string;

    @Column({
        type: DataType.STRING,
    })
    public token!: string;

    @BelongsTo(() => User, { foreignKey: "userId" })
    public user!: User;
}

export default Token;

