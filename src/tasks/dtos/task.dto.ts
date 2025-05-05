/* eslint-disable prettier/prettier */
import { IsString, IsNotEmpty, IsNumber, IsPositive, IsBoolean } from "class-validator";
// import { PartialType, ApiProperty } from "@nestjs/swagger";

export class CreateTaskDto {
    @IsString()
    @IsNotEmpty()
    // @ApiProperty()
    readonly tittle: string;

    @IsBoolean()
    @IsNotEmpty()
    // @ApiProperty()
    readonly completed: boolean;
}

// export class UpdateItemDto extends PartialType(CreateItemDto){}