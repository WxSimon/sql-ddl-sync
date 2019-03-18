/// <reference types="fibjs" />
/// <reference path="_common.d.ts" />

declare namespace FxOrmSqlDDLSync__Dialect {
    type DialectType = 'mysql' | 'mssql' | 'sqlite' | 'postgresql'
    interface Dialect {
        hasCollection: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, name: string, cb: FxOrmSqlDDLSync.ExecutionCallback<boolean>): void
        }
        addPrimaryKey: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, tableName: string, columnName: string, cb: FxOrmSqlDDLSync.ExecutionCallback<any>): void
        }
        dropPrimaryKey: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, tableName: string, columnName: string, cb: FxOrmSqlDDLSync.ExecutionCallback<any>): void
        }
        addForeignKey: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, tableName: string, options: any, cb: FxOrmSqlDDLSync.ExecutionCallback<any>): void
        }
        dropForeignKey: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, tableName: string, columnName: string, cb: FxOrmSqlDDLSync.ExecutionCallback<any>): void
        }
        getCollectionProperties: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, name: string, cb: FxOrmSqlDDLSync.ExecutionCallback<FxOrmSqlDDLSync__Column.ColumnInfoHash>): void
        }
        createCollection: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, name: string, columns: string[], keys: string[], cb: FxOrmSqlDDLSync.ExecutionCallback<any>): void
        }
        dropCollection: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, name: string, cb: FxOrmSqlDDLSync.ExecutionCallback<any>): void
        }
        addCollectionColumn: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, name: string, column: string, after_column: string|false, cb: FxOrmSqlDDLSync.ExecutionCallback<any>): void
        }
        renameCollectionColumn: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, name: string, oldColName: string, newColName: string, cb: FxOrmSqlDDLSync.ExecutionCallback<any>): void
        }
        modifyCollectionColumn: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, name: string, column: string, cb: FxOrmSqlDDLSync.ExecutionCallback<any>): void
        }
        dropCollectionColumn: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, name: string, column: string, cb: FxOrmSqlDDLSync.ExecutionCallback<any>): void
        }
        getCollectionIndexes: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, name: string, cb: FxOrmSqlDDLSync.ExecutionCallback<FxOrmSqlDDLSync__DbIndex.DbIndexInfoHash>): void
        }
        addIndex: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, name: string, unique: boolean, collection: FxOrmSqlDDLSync.TableName, columns: string[], cb: FxOrmSqlDDLSync.ExecutionCallback<any>): void
        }
        removeIndex: {
            (driver: FxOrmSqlDDLSync__Driver.Driver, name: string, collection: FxOrmSqlDDLSync.TableName, cb: FxOrmSqlDDLSync.ExecutionCallback<any>): void
        }
        getType: {
            (collection: FxOrmSqlDDLSync.TableName, property: FxOrmSqlDDLSync__Column.Property, driver: FxOrmSqlDDLSync__Driver.Driver): false | string | FxOrmSqlDDLSync__Column.OpResult__CreateColumn
        }

        /**
         * process composite keys
         */
        processKeys?: {
            (keys: string[]): string[]
        }
        /**
         * transform type between property and column
         */
        supportsType?: {
            (type: string): string
        }

        convertIndexes?: {
            (rows: FxOrmSqlDDLSync__Collection.Collection, db_idxes: FxOrmSqlDDLSync__DbIndex.DbIndexInfo[]): FxOrmSqlDDLSync__DbIndex.DbIndexInfo[]
        }
    }

    interface DialectResult<T = any> {
		value: T,
		before?: false | Function
	}
}