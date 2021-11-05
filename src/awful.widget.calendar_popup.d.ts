/** @noSelfInFile @noResolution */
declare module "awful" {
    namespace widget {
        namespace calendar_popup {
            interface OnThings {
                on_pressed: boolean,
                on_hover: boolean
            }

            interface MonthCalendar {
                attach(clockWidget: any, something: string, onThings: OnThings): void
            }

            function month(monthObject: any): MonthCalendar
        }
    }
}