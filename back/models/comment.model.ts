import { Column, AllowNull, PrimaryKey, Model, Table, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import User from "./user.model";

@Table({
    tableName: "Comment",
    timestamps: true,
    omitNull: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
})
class Comment extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING,
    })
    public comment!: string;

    @ForeignKey(() => User)
    @Column({
        type: DataType.STRING,
    })
    public userid!: string;

    @BelongsTo(() => User, { foreignKey: "userid" })
    public user!: User;
}

export default Comment;

