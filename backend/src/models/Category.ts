import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Category extends Model<Category> {

    @Column({
        allowNull: false
    })
    name: string = '';

    @Column({
        allowNull: false,
        unique: true
    })
    slug: string = '';
}