using Confluent.Kafka;

var config = new ProducerConfig { BootstrapServers = "localhost:9092" };

using (var producer = new ProducerBuilder<Null, string>(config).Build())
{
    Console.WriteLine("Type your message:");
    while (true)
    {
        var message = Console.ReadLine();
        var dr = await producer.ProduceAsync("chat-topic", new Message<Null, string> { Value = message });
        Console.WriteLine($"Sent to: {dr.TopicPartitionOffset}");
    }
}



var config = new ConsumerConfig
{
    BootstrapServers = "localhost:9092",
    GroupId = "chat-group",
    AutoOffsetReset = AutoOffsetReset.Earliest
};

using (var consumer = new ConsumerBuilder<Ignore, string>(config).Build())
{
    consumer.Subscribe("chat-topic");
    while (true)
    {
        var cr = consumer.Consume();
        Console.WriteLine($"Message received: {cr.Message.Value}");
    }
}