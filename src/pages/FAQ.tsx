import * as Accordion from '@radix-ui/react-accordion';
import React from 'react';

export default function FAQ() {
    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6">FAQ</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <Accordion.Root type="single" collapsible>
                        <Accordion.Item value="item-1">
                            <Accordion.Trigger className="text-left text-lg font-medium py-2">
                                Vad ingår?
                            </Accordion.Trigger>
                            <Accordion.Content className="text-gray-700 py-2">
                                I utefotograferingen ingår 4st högupplösta bilder. Därefter kostar det 150kr/bild och då
                                kontaktar ni mig om ni vill ha fler.
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item value="item-2">
                            <Accordion.Trigger className="text-left text-lg font-medium py-2">
                                Hur går det till?
                            </Accordion.Trigger>
                            <Accordion.Content className="text-gray-700 py-2">
                                Vi planerar fotograferingen tillsammans och hittar en tid och plats som passar.
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item value="item-3">
                            <Accordion.Trigger className="text-left text-lg font-medium py-2">
                                Hur lång tid tar en vanlig fotosession?
                            </Accordion.Trigger>
                            <Accordion.Content className="text-gray-700 py-2">
                                En session tar vanligtvis mellan 0.5-2 timmar beroende på era önskemål.
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item value="item-4">
                            <Accordion.Trigger className="text-left text-lg font-medium py-2">
                                Fotograferar du utanför Kungälv?
                            </Accordion.Trigger>
                            <Accordion.Content className="text-gray-700 py-2">
                                Ja, men reseersättning kan tillkomma.
                            </Accordion.Content>
                        </Accordion.Item>
                        <Accordion.Item value="item-5">
                            <Accordion.Trigger className="text-left text-lg font-medium py-2">
                                Bröllop, vad ingår i baspaketet?
                            </Accordion.Trigger>
                            <Accordion.Content className="text-gray-700 py-2">
                                I det enklaste bröllopspaketet ingår ca 4 timmar på plats och 50st bilder som ni väljer
                                ut.
                            </Accordion.Content>
                        </Accordion.Item>
                    </Accordion.Root>
                </div>
            </div>
        </div>
    );
}
