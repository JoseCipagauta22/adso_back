/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsNumber, IsPositive, IsBoolean } from "class-validator";
import { PartialType, ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly lastName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    readonly doc: string;

    @IsString()
    // @IsNotEmpty()
    @ApiProperty()
    readonly texto: string;
}

export class UpdateUserDto extends PartialType(CreateUserDto){}