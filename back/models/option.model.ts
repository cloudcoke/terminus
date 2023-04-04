import { Column, AllowNull, BelongsTo, Model, Table, DataType, ForeignKey } from "sequelize-typescript";
import Quiz from "./quiz.model";

@Table({
    tableName: "Options",
    omitNull: true,
    timestamps: true,
    charset: "utf8mb4",
    collate: "utf8mb4_general_ci",
})
class Options extends Model {
    @ForeignKey(() => Quiz)
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
    public optioncommand!: string;

    @BelongsTo(() => Quiz, { foreignKey: "command" })
    public quiz!: Quiz;
}

export default Options;

